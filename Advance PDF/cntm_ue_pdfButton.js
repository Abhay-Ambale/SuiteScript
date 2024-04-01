/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @filename     cntm_ue_pdfButton.js    
 * @scriptname   cntm_ue_pdfButton
 * @ScriptId     customscriptcntm_ue_pdfbutton
 * @author       Abhay Ambale
 * @email        abhay.ambale@centium.net
 * @date         27 December 2022  
 * @description  Adding a button on a record named as 'Open PDF'.
 
 * 
 * Sr. No   	 Date           	  Author                  	Remarks
 *   1		  27/12/2022	        Abhay Ambale    	   Button added on a sales order. 
 *
 */
define(['N/currentRecord', 'N/record', 'N/ui/serverWidget'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{serverWidget} serverWidget
 */
    (currentRecord, record, serverWidget) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            try {
                var form = scriptContext.form;
                form.clientScriptFileId = 17358;
                form.addButton({
                    label: 'Open PDF',
                    id:'custpage_pdfopner' ,
                    functionName: 'openPdf()'     
                })
                log.debug('Run of UE:', 'UE run succesful')
                
            } catch (error) {
                log.debug('Error in UE:', error)
            }
            

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
