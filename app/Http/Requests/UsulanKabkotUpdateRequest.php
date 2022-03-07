<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsulanKabkotUpdateRequest extends FormRequest
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
            'jumlah' => ['required', 'min:1'],
            'polabiaya' => ['required'],
            'lampiran' => ['nullable', 'mimetypes:application/pdf', 'max:1024'],
        ];
    }
}
