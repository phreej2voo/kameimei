<?php

namespace App\Services;

use Illuminate\Pagination\LengthAwarePaginator;

class CustomizePagination extends LengthAwarePaginator
{
    public function toArray()
    {
        return [
            'list' => $this->items(),
            'map' => [
                'count' => $this->total(),
                'page' => $this->currentPage(),
                'page_size' => $this->perPage(),
            ]
        ];
    }
}
