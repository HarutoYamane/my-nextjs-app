export default function PageTitle({ title }: { title: string }) {
    return (
      <h1 className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
        {title}
      </h1>
    )
  }
