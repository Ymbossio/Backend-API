import {Request, Response} from 'express'
import { QueryResult } from 'pg';
import crypto from 'crypto';


//importamos los servicios .
import { CreateTransferServices } from '../servicio/ServicesTransferencias';

interface Params {
    id: string;
}

export const CreateRegister = async (req: Request, res: Response): Promise<Response> => {
    const result = req.body;

    const transferenciaData = {
        transactionId: result?.data?.transaction?.id,
        createdAt: result?.data?.transaction?.created_at,
        finalizedAt: result?.data?.transaction?.finalized_at,
        amountInCents: result?.data?.transaction?.amount_in_cents,
        reference: result?.data?.transaction?.reference,
        customerEmail: result?.data?.transaction?.customer_email,
        currency: result?.data?.transaction?.currency,
        paymentMethodType: result?.data?.transaction?.payment_method?.type,
        bin: result?.data?.transaction?.payment_method?.extra?.bin,
        name: result?.data?.transaction?.payment_method?.extra?.name,
        brand: result?.data?.transaction?.payment_method?.extra?.brand,
        expYear: result?.data?.transaction?.payment_method?.extra?.exp_year,
        cardType: result?.data?.transaction?.payment_method?.extra?.card_type,
        expMonth: result?.data?.transaction?.payment_method?.extra?.exp_month,
        lastFour: result?.data?.transaction?.payment_method?.extra?.last_four,
        cardHolder: result?.data?.transaction?.payment_method?.extra?.card_holder,
        isThreeDS: result?.data?.transaction?.payment_method?.extra?.is_three_ds,
        uniqueCode: result?.data?.transaction?.payment_method?.extra?.unique_code,
        currentStep: result?.data?.transaction?.payment_method?.extra?.three_ds_auth?.current_step || 'Unknown',
        currentStepStatus: result?.data?.transaction?.payment_method?.extra?.three_ds_auth?.current_step_status || 'Unknown',
        externalIdentifier: result?.data?.transaction?.payment_method?.extra?.external_identifier,
        processorResponseCode: result?.data?.transaction?.payment_method?.extra?.processor_response_code,
        token: result?.data?.transaction?.payment_method?.token,
        installments: result?.data?.transaction?.payment_method?.installments,
        status: result?.data?.transaction?.status,
        statusMessage: result?.data?.transaction?.status_message,
        shippingAddress: result?.data?.transaction?.shipping_address,
        paymentSourceId: result?.data?.transaction?.payment_source_id,
        paymentLinkId: result?.data?.transaction?.payment_link_id,
        fullName: result?.data?.transaction?.customer_data?.full_name,
        phoneNumber: result?.data?.transaction?.customer_data?.phone_number,
        legalIdType: result?.data?.transaction?.billing_data?.legal_id_type,
        legalId: result?.data?.transaction?.billing_data?.legal_id,
        sentAt: result?.sent_at,
        timestamp: result?.timestamp,
        checksum: result?.signature?.checksum,
        environment: result?.environment,
        
    };

    try {
        // Validación de transferencia
        //const validator = `${transferenciaData.transactionId}${transferenciaData.status}${transferenciaData.amountInCents}${transferenciaData.timestamp}${process.env.EVENT_INTEGRATIONII}`;
        const validator = `${transferenciaData.transactionId}${transferenciaData.status}${transferenciaData.amountInCents}${transferenciaData.timestamp}${process.env.EVENT_INTEGRATION}`;
        
        const hashHex = crypto.createHash('sha256').update(validator).digest('hex');

        console.log(hashHex, "has");

        const response = await CreateTransferServices(transferenciaData);
        return res.json({ message: "Create successful!" });
       /* if(hashHex === hashHex){// Asegúrate de que la comparación sea correcta
        } else {
            return res.json({ success: false, message: "Checksum incorrect" });
        }*/
    } catch (error) {
        throw error; 
    }
};
