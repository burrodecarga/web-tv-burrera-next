'use server'
import { createClient } from "@/lib/supabase/server"
import { error } from "console"

export async function updateAvatar(formData:FormData) {
    const supabase = await createClient()

    const file = formData.get('file') as File
    const userId =formData.get('userId') as string


/*   subir imagen de avatar */

const fileExt=file.name.split('.').pop()
const filePath=`${userId}.${fileExt}`


const {error:uploadError}=await supabase.storage.from('avatars').upload(filePath,file,{upsert:true,contentType:file.type})
if(uploadError){
    console.log('error al subir imagen',uploadError)
    throw new Error(`error al subir mensaje : ${uploadError.message}`)
}
   
/*obtener imagen pública de la imagen*/

const {data:publicUrlData}= supabase.storage.from('avatars').getPublicUrl(filePath)
if(!publicUrlData){ 
    throw new Error(`no se pudo obtener info de la imagen`)
}

/*actualizar avatar*/

const {error:updatError}=await supabase
.from('profiles').update({
    avatar_url:publicUrlData.publicUrl,
    updated_at:new Date().toISOString()
})
.eq('id',userId)

if(updatError){
    console.log('error en actualización')
    throw new Error('Error en actualización '+ updatError.message)
}

return {publicUrl:publicUrlData.publicUrl}
}



