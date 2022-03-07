<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PelatihanResource extends JsonResource
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
            'nama' => $this->nama,
            'biaya' => $this->biaya,
            'hari' => $this->hari,
            'jp' => $this->jp,
            'deskripsi' => $this->deskripsi,
            'is_tampil' => $this->is_tampil,
            'deleted_at' => $this->deleted_at,
            'jenis' => $this->jenis->only('id', 'nama'),
            'rumpun' => $this->rumpun->only('id', 'kode', 'nama'),            
        ];
    }
}
