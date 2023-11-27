<?php

namespace App\Models;

class UserPayRecord extends BaseModel
{
    protected $table = 'user_pay_record';

    public const PAY_STATUS_UNPAID = 'unpaid';
    public const PAY_STATUS_ERROR = 'error';
    public const PAY_STATUS_PAID = 'paid';

    protected $casts = [
        'trade_info' => 'array',
        'notify_result' => 'array'
    ];
}
