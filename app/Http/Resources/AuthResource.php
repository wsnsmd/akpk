<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Avatar;

class AuthResource extends JsonResource
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
            'username' => $this->username,
            'name' => $this->name,
            'level' => $this->level,
            'photo' => Avatar::create($this->name)->toBase64(),
            'deleted_at' => $this->deleted_at,            
        ];
    }
}
