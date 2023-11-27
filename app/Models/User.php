<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public const GROUP_NORMAL = 1;
    public const GROUP_VIP = 2;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
    ];

    protected $ignoreFields = [
        'avatar',
        'password',
        'remember_token',
        'wx_openid',
        'open_openid',
        'qq_openid',
        'wx_unionid',
        'qq_unionid',
        'music_token',
    ];
    protected $fieldMap = [];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->initFieldMap();
    }

    private function initFieldMap()
    {
        $columns = $this->getFullColumns();
        foreach ($columns as $column) {
            $column = (array)$column;
            $name = $column['Field'];
            $comment = $column['Comment'] ?? $name;
            if (!in_array($name, $this->ignoreFields)) {
                $this->fieldMap[$name] = $comment;
            }
        }
    }

    private function getFullColumns()
    {
        $sql = 'SHOW FULL COLUMNS FROM `'. $this->getTable() . '`';
        return DB::select($sql);
    }

    public function getFieldMap()
    {
        return $this->fieldMap;
    }

    public static function updateOrCreate($name, $openid, $avatar, $unionid = '', $type = 'wx', $platform = 'wx')
    {
        $user = null;
        !empty($unionid) && $user = self::query()
            ->where($type . '_unionid', $unionid)
            ->first();
        if (!$user) {
            !empty($openid) && $user = self::query()
                ->where($platform . '_openid', $openid)
                ->first();
            if (!$user) {
                $user = new self([
                    'name' => $name,
                    'avatar' => $avatar,
                    'password' => bcrypt(uniqid()),
                    $platform . '_openid' => $openid,
                    $type . '_unionid' => $unionid,
                ]);
                $user->save();
            } else {
                $user->update([
                    'name' => $name,
                    'avatar' => $avatar,
                    'wx_openid' => $openid
                ]);
            }
        } else {
            $user->update([
                'name' => $name,
                'avatar' => $avatar,
                $platform . '_openid' => $openid,
                $type . '_unionid' => $unionid
            ]);
        }

        return $user;

    }

    public function isVIP()
    {
        return !empty($this->group) && !empty($this->end_time)
            && $this->group == self::GROUP_VIP && $this->end_time >= date('Y-m-d');
    }
}
