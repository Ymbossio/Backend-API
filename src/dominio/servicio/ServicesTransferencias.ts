import { Request, Response } from "express";
import { CreateTransferenciasDB } from "../repositories/RepTransferencias";
import TransferenciaData from "data";



// Función para mapear TransferenciaData a las propiedades del modelo Sequelize
export const mapTransferenciaDataToModel = (data: TransferenciaData): any => {
    return {
        transaction_id: data.transactionId,
        created_at: data.createdAt,
        finalized_at: data.finalizedAt,
        amount_in_cents: data.amountInCents,
        customer_email: data.customerEmail,
        currency: data.currency,
        payment_method_type: data.paymentMethodType,
        bin: data.bin,
        name: data.name,
        brand: data.brand,
        exp_year: data.expYear,
        card_type: data.cardType,
        exp_month: data.expMonth,
        last_four: data.lastFour,
        card_holder: data.cardHolder,
        is_three_ds: data.isThreeDS,
        unique_code: data.uniqueCode,
        current_step: data.currentStep,
        current_step_status: data.currentStepStatus,
        external_identifier: data.externalIdentifier,
        processor_response_code: data.processorResponseCode,
        token: data.token,
        installments: data.installments,
        status: data.status,
        status_message: data.statusMessage,
        shipping_address: data.shippingAddress,
        payment_source_id: data.paymentSourceId,
        payment_link_id: data.paymentLinkId,
        full_name: data.fullName,
        phone_number: data.phoneNumber,
        legal_id_type: data.legalIdType,
        legal_id: data.legalId,
        sent_at: data.sentAt,
        timestamp: data.timestamp,
        checksum: data.checksum,
        environment: data.environment,
        reference: data.reference
    };
};



export const CreateTransferServices = async (data: TransferenciaData)=> {

    try {
      // Llamar a la función para crear la transferencia en la base de datos
      const transferencia = await CreateTransferenciasDB(data);
      console.log('Transferencia creada:', transferencia.toJSON());
      return transferencia;
    } catch (error) {
      throw error; 
    }

}