/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 * @filename     cntm_sl_pdfOpener.js    
 * @scriptname   cntm_sl_pdfOpener
 * @ScriptId     customscriptcntm_sl_pdfopener
 * @author       Abhay Ambale
 * @email        abhay.ambale@centium.net
 * @date         27 December 2022  
 * @description  On calling of this suitlet it will trigger the preffered templaate of PDF on sales order record.
 
 * 
 * Sr. No   	 Date           	  Author                  	Remarks
 *   1		  27/12/2022	        Abhay Ambale    	    Script for triggering the pdf to open that is already preffered for the transaction.  
 *
 */
define(['N/currentRecord', 'N/record', 'N/ui/serverWidget','N/render'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{serverWidget} serverWidget
 */
    (currentRecord, record, serverWidget,render) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            try {
                
                var transId = scriptContext.request.parameters.recId;
                var pdfOpener = render.transaction({
                    entityId: parseInt(transId),
                    printMode:render.PrintMode.PDF
                })
                scriptContext.response.writeFile({
                    file: pdfOpener,
                    isInline: true
                })
                
              
                log.debug('Suitelet is running')
            } catch (error) {
                log.debug('Suitelet Error', error)
            }
            
        }

        return {onRequest}

    });
