import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton (3) - 動的にactionを呼び出す',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}
