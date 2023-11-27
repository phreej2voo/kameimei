<?php

namespace App\Models;

use Encore\Admin\Traits\ModelTree;

/**
 * @property int id
 * @property int pid
 * @property string name
 * @property string icon
 * @property int type
 * @property int sort
 * @property int show_in_home_page
 */
class Category extends BaseModel
{
    public const TYPE_SCENE = 1;
    public const TYPE_IMG = 2;
    public const TYPE_MUSIC = 3;

    public const TYPE_NAME_MAP = [
        self::TYPE_SCENE => '场景',
        self::TYPE_IMG => '图片',
        self::TYPE_MUSIC => '音乐'
    ];

    use ModelTree;

    protected $table = 'category';

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setParentColumn('pid');
        $this->setTitleColumn('name');
        $this->setOrderColumn('sort');
    }
}
