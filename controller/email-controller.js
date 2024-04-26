import { request } from "express";
import emailVal from "../model/Validation.js";

export const saveSendEmails = async (request, response) => {
  try {
    const Data = request.body;

    // Create a new instance of emailVal
    const NewEmail = new emailVal(Data);

    // Save the email asynchronously
    await NewEmail.save();

    // Respond with a success message
    response.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    // Handle any errors that occur during the save operation
    response.status(500).json({ error: error.message });
  }
}; 





export const getEmails = async (request, response) => {
  try {
    let emails;
    if (request.params.type === 'sent') {
      // Retrieve sent emails
      emails = await emailVal.find({ type: request.params.type }).lean();
    } else if (request.params.type === 'draft') {
      // Retrieve draft emails
      emails = await emailVal.find({ type: request.params.type }).lean();
    }else if( request.params.type === 'bin'){
      emails = await emailVal.find({bin : true})
    }
    else if (request.params.type === 'allmail'){
      emails = await emailVal.find({});

    }else if (request.params.type === 'starred'){
      emails = await emailVal.find({starred: true, bin: false})
    }
    return response.status(200).json(emails || []); // Return an empty array if no emails found
  } catch (error) {
    // Handle any errors that occur during the query
    response.status(500).json({ error: error.message });
  }
};



export const saveDraft = async (request, response) => {
  try {
    const Data = request.body;
    const Draft = new emailVal(Data);
    await Draft.save();
    // Respond with a success message
    response.status(200).json({ message: 'Email Drafted successfully' });
  } catch (error) {
    // Handle any errors that occur during the save operation
    response.status(500).json({ error: error.message });
  }
};
export const MoveApiToBin = async (request, response) => {
  try {
    const Data = request.body;
    const result = await emailVal.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: '' } }
    );
    return response.status(200).json({ message: 'Emails went to Bin successfully' });
  } catch (error) {
    // Handle any errors that occur during the operation
    response.status(500).json({ error: error.message });
  }
};


export const StarredFuntion= async(request, response)=>{
  try{
  //const Data = request.body;
  const result = await emailVal.updateOne({_id: {$in: request.body.id}}, {$set:{starred: request.body.value}})
  return response.status(200).json({ message: 'Emails went to Starred successfully' });



}catch (error) {
  // Handle any errors that occur during the operation
  response.status(500).json({ error: error.message });
}
};


