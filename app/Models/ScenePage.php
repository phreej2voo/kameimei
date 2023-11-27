<?php

namespace App\Models;

/**
 * @property int id
 * @property int scene_id
 * @property int user_tpl_id
 * @property int num
 * @property array content
 * @property array extend
 * @property array property
 */
class ScenePage extends BaseModel
{
    protected $table = 'scene_page';

    protected $casts = [
        'content' => 'array',
        'extend' => 'array',
        'property' => 'array',
    ];
}
