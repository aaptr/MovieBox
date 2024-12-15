import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'


export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container >
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </div>
  )
}