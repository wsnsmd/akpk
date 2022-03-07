<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KabkotResource extends JsonResource
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
            'id' => $this->id,
            'admin_id' => $this->admin_id,
            'nama' => $this->nama,
            'singkat' => $this->singkat,
            'ket' => $this->ket,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
