import type { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'Pix-room',
    description: 'Pix-room',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className=' '>
            {children}
        </div>
    )
}
