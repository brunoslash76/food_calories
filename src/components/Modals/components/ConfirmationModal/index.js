import PropTypes from 'prop-types'
import { Modal } from '@mui/material'

import { SubTitle } from '../../../Typography'
import Button from '../../../Button'
import {
    ModalCard,
    ModalCardHeader,
    ModalCardBody,
    ModalCardFooter,
    ModalFormContainer,
    CloseButton,
} from '../shared'

const ConfirmationModal = ({
    open,
    handleSubmit,
    handleCloseModal,
    handleCancel,
    title,
    children
}) => {
    return (
        <Modal
            open={open}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <ModalCard>
                <ModalFormContainer onSubmit={handleSubmit}>
                    <ModalCardHeader>
                        <SubTitle color="primary">{title}</SubTitle>
                        <CloseButton onClick={handleCloseModal}>x</CloseButton>
                    </ModalCardHeader>
                    <ModalCardBody>
                        {children}
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Button
                            type="button"
                            color="danger"
                            withRightSpacing
                            onClick={handleCancel}
                        >
                            cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                        >
                            confirm
                        </Button>
                    </ModalCardFooter>
                </ModalFormContainer>
            </ModalCard>
        </Modal>
    )
}

ConfirmationModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default ConfirmationModal
