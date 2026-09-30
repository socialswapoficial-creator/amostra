// Insira o número oficial com código do país e DDD, apenas dígitos.
const WHATSAPP_NUMBER = '';
document.querySelectorAll('[data-treatment]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('select').value=button.dataset.treatment;document.querySelector('#agendamento').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
const dialog=document.querySelector('dialog');
document.querySelectorAll('.dialog-close,.dialog-done').forEach(b=>b.addEventListener('click',()=>dialog.close()));
document.querySelector('#appointment').addEventListener('submit',event=>{event.preventDefault();if(!WHATSAPP_NUMBER){dialog.showModal();return;}const data=new FormData(event.currentTarget);const text=`Olá, ODONTOCLINIC! Meu nome é ${data.get('name')}. Tenho interesse em ${data.get('treatment')}. ${data.get('message')||''}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');document.querySelector('#form-status').textContent='Continue no WhatsApp para enviar sua mensagem. O horário depende de confirmação da equipe.';});
document.querySelector('#year').textContent=new Date().getFullYear();
