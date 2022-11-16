import { mount } from '@vue/test-utils'
import ChatBox from '../src/components/chat/ChatBox.vue'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import useChatStore from '../src/store/chat.store'
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'

describe('Chat Box', () => {
    let chatStore;
    beforeAll(() => {
        setActivePinia(createPinia())
        chatStore = useChatStore()
    })

    it('should store new message', () => {
        const text = 'Bonjour general'
        
        chatStore.addMessage({ message: text, name: 'Edouard' })
        expect(chatStore.history.findIndex(message => 
            message.text === text
        )).toBeGreaterThan(-1)
    })

    it('ChatBox history should contains the store history', () => {
        const wrapper = mount(ChatBox)

        expect(wrapper.vm.history.length).toBe(1)
    })
})
