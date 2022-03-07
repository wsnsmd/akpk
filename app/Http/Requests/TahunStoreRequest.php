<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TahunStoreRequest extends FormRequest
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
            'tahun' => ['required', 'integer', 'between:0,9999', 'unique:tahuns,tahun'],
            'aktif' => ['required', 'boolean'],
        ];
    }
}
