import {render, screen} from '@testing-library/react'
import { PostList } from './Post'

describe('test fake rest api',() => {
    test('test render list', async () => {
        render(<PostList/>)

        const listItemElement = await screen.findAllByRole('listitem', {timeout: 10})
        expect(listItemElement).not.toHaveLength(0)
    })
})