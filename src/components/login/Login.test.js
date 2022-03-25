import { renderHook } from '@testing-library/react-hooks'
import { Login } from './Login'

test('should use counter', () => {
  const { result } = renderHook(() => Login('false', (x) => (!x)))

  expect(result.current.isLoggedIn).toBe('true')
  expect(typeof result.current.increment).toBe('function')
})
