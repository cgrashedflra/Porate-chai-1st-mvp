type PageProps = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: PageProps) => {
    const { id } = await params

    return (
        <div>educator no: {id}</div>
    )
}

export default Page