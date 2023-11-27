<?php

namespace App\Models;

class FormData extends BaseModel
{
    protected $table = 'form_data';

    protected $casts = [
        'data' => 'array'
    ];
}
