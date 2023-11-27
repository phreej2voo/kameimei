<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseModel extends Model
{
    public const CREATED_AT = 'create_time';
    public const UPDATED_AT = 'update_time';

    protected $fieldMap = [];

    protected $ignoreFields = [];

    protected $guarded = [];

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
}
