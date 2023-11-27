<?php

namespace App\Models;

class GiftRecord extends BaseModel
{
    public const TYPE_GIFT = 1;
    public const TYPE_MONEY = 2;

    protected $table = 'gift_record';
}
