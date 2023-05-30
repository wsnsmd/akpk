<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsulanKabkotStoreRequest extends FormRequest
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
            'pelatihan_id' => ['required'],
            'polabiaya' => ['required'],
            'jumlah' => ['required', 'min:1'],
            'lampiran' => ['nullable', 'mimetypes:application/pdf', 'max:1024'],
        ];
    }
}
