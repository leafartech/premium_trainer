import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Adm = () => {
    const router = useRouter()
    const [access, setAccess] = useState<boolean>(false)

    let userAuth: string | null = ''

    if (typeof window !== 'undefined') {
        userAuth = localStorage.getItem('train-system')
    }

    if (userAuth === null) {
        router.push('/login-adm')
    } else {
        useEffect(() => {
            setAccess(true)
        })
    }

    return (
        <>
            {access && (
                <div>
                    conteúdo
                </div>
            )}
        </>
    )
}

export default Adm