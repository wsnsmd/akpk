<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsulanResource extends JsonResource
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
            // 'pelatihan_id' => $this->pelatihan_id,
            'pnama' => $this->pnama,
            'jumlah' => $this->jumlah,
            'pbiaya' => $this->pbiaya,
            'phari' => $this->phari,
            'pjp' => $this->pjp,
            'polabiaya' => $this->polabiaya,
            'is_verify' => $this->is_verify,
            'lampiran' => $this->lampiran,
            'deleted_at' => $this->deleted_at,
            'pelatihan' => $this->pelatihan->only('id', 'jenis_id', 'rumpun_id'),
        ];
    }
}
