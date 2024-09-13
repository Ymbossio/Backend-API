    import pool from '../../database';
    import { QueryResult } from 'pg';
    import TransferenciaData from 'data';
    import { Transferencia } from '../../model/transferencias';
    import  create  from 'sequelize';


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


export const CreateTransferenciasDB = async (data: TransferenciaData): Promise<Transferencia> => {
    try {
        // Mapea los datos para que coincidan con el modelo Sequelize
        const mappedData = mapTransferenciaDataToModel(data);

        // Crea la transferencia en la base de datos
        const transferencia = await Transferencia.create(mappedData);

        return transferencia;
    } catch (error) {
        throw error;
    }
};

export const UpdateTransferenciasDB = async (transaction_id: string, amount_in_cents: string, reference: string, customer_email: string, currency: string, payment_method_type: string, redirect_url: string, status: string, shipping_address: string, payment_link_id: string, payment_source_id: string, environment: string, signature_properties: string, signature_checksum: string, timestamp: string, sent_at: string
): Promise<QueryResult> => {
    return await pool.query(
        `UPDATE transferencias SET amount_in_cents = $1, reference = $2, customer_email = $3, currency = $4, payment_method_type = $5, redirect_url = $6, status = $7, shipping_address = $8, payment_link_id = $9, payment_source_id = $10, environment = $11, signature_properties = $12, signature_checksum = $13, timestamp = $14, sent_at = $15
        WHERE transaction_id = $16`,
        [amount_in_cents, reference, customer_email, currency, payment_method_type, redirect_url, status, shipping_address, payment_link_id, payment_source_id, environment, signature_properties, signature_checksum, timestamp, sent_at, transaction_id]
    );
};
