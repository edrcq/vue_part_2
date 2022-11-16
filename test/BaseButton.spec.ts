import { mount } from '@vue/test-utils'
import BaseButton from '../src/components/common/BaseButton.vue'
import { describe, it, expect } from 'vitest'

describe('BaseButton.vue', () => {

    it('should render with the good type', () => {
        const btnType = 'submit' // pour les props
        const testType = 'submit' // copie de la bonne reponse (ne pas envoyer au test)
        
        const wrapper = mount(BaseButton, {
            props: {
                btnType: btnType,
            }
        })
        
        //console.log(wrapper.element.getAttribute('type'))
        expect(wrapper.vm.btnType).toBe(testType)
        expect(wrapper.element.getAttribute('type')).toBe(testType)
        wrapper.unmount()
    })

    it('should render with the good type', () => {
        const btnType = 'button' // pour les props
        const testType = 'button' // copie de la bonne reponse (ne pas envoyer au test)
        
        const wrapper = mount(BaseButton, {
            props: {
                btnType: btnType,
            }
        })
        
        //console.log(wrapper.element.getAttribute('type'))
        expect(wrapper.element.getAttribute('type')).toBe(testType)
        wrapper.unmount()
    })

    it('should render with good content', () => {
        const btnText = 'Le Bouton';

        const wrapper = mount(BaseButton, {
            slots: {
                default: btnText
            }
        })

        expect(wrapper.text()).toBe(btnText)
    })

})
