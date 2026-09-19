import { unstable_navigation } from 'next/server'

export async function experimental_generateParamMatching() {
  await unstable_navigation()
  return { slug: 'blocking' }
}

export default function Page() {
  return <p>navigation</p>
}
