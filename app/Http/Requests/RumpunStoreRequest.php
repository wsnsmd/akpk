<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RumpunStoreRequest extends FormRequest
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
            'kode' => ['required', 'max:2', 'unique:rumpuns,kode'],
            'nama' => ['required'],    
            'ket' => ['nullable'],
        ];
    }
}
