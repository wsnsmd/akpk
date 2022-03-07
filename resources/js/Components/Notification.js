import { Fragment, useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import classNames from 'classnames';

export default() => {
    const [show, setShow] = useState(true)
    const { flash, errors } = usePage().props
    const numOfErrors = Object.keys(errors).length;

    useEffect(() => {
        setShow(true)
    }, [flash, errors])

    return (
        <>
            {flash.success && visible && (
                <div
                    aria-live="assertive"
                    className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
                >
                </div>
            )}
        </>
    )
}
