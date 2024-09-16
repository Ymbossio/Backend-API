interface transferData {
    transactionId?: number; // Puede ser opcional, pero debe coincidir con el tipo en el modelo Sequelize
    createdAt: Date;
    finalizedAt?: Date;
    amountInCents: number;
    customerEmail?: string;
    currency: string;
    paymentMethodType: string;
    bin?: string;
    name?: string;
    brand?: string;
    expYear?: number;
    cardType?: string;
    expMonth?: number;
    lastFour?: string;
    cardHolder?: string;
    isThreeDS?: boolean;
    uniqueCode?: string;
    currentStep?: string;
    currentStepStatus?: string;
    externalIdentifier?: string;
    processorResponseCode?: string;
    token?: string;
    installments?: number;
    status: string;
    statusMessage?: string;
    shippingAddress?: string;
    paymentSourceId?: string;
    paymentLinkId?: string;
    fullName?: string;
    phoneNumber?: string;
    legalIdType?: string;
    legalId?: string;
    sentAt?: Date;
    timestamp: Date;
    checksum?: string;
    environment: string;
    reference: string;
}

export default transferData;
