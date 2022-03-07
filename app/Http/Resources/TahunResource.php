<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TahunResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'tahun' => $this->tahun,
            'aktif' => $this->aktif,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
