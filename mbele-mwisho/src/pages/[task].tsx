import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const Task = ({ children }) => {
  const router = useRouter()
  const { task } = router.query

  return <main>{children}</main>
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { task: 'today' } },
      { params: { task: 'tomorrow' } },
      { params: { task: 'calendar' } },
      { params: { task: 'completed' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = () => {
  return { props: {} }
}

export default Task
