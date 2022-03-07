<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PelatihanUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'jenis_id' => ['required'],
            'rumpun_id' => ['required'],
            'nama' => ['required'],
            'biaya' => ['required'],
            'hari' => ['required'],
            'jp' => ['required'],
            'deskripsi' => ['nullable'],
            'is_tampil' => ['required', 'boolean'],
        ];
    }
}
