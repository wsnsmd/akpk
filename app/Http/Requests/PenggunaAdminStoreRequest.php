<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PenggunaAdminStoreRequest extends FormRequest
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
            'name' => ['required', 'max:100'],
            'username' => ['required', 'max:50'],
            'singkat' => ['nullable', 'max:50'],
            'password' => ['required'],
            'hp' => ['nullable'],
            'level' => ['required'],
            'photo' => ['nullable', 'image'],
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'name.required' => 'Nama tidak boleh kosong',
    //         'username.required' => 'A message is required',
    //     ];
    // }

    public function attributes()
    {
        return [
            'name' => 'nama lengkap',
            // 'username' => 'Username',
            'singkat' => 'nama singkat',
            // 'password' => 'Password',
            // 'level' => 'Level',
        ];
    }
}
