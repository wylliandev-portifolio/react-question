
import React, { Component } from 'react'
import './Question.css';
import { isMobile } from 'react-device-detect';
import { Text, Linking } from 'react-native';
import { Platform } from 'react-native';



export default class Question extends Component {

  render() {

    var left = 150 + 'px';
    var top = 150 + 'px';


    function randomNumberInRange(min, max) {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function onClickButton(params) {
      var num = randomNumberInRange(10, 70);
      var num2 = randomNumberInRange(10, 70);
      left = num + '%';
      top = num2 + '%'
      document.getElementById('tipoNao').style.left = left;
      document.getElementById('tipoNao').style.top = top;
      document.getElementById('nome').style.color = "white";
    }

    function sendWhatsApp(params) {
      let msg = "Vamos <3";
      let phoneWithCountryCode = "5569984324602";
      let mobile = Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
      console.log(Platform);

      if (mobile) 
      {
        if (msg) 
        {
          let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
          console.log(url);

          Linking.openURL(url)
            .then(data => {
              console.log("WhatsApp Opened");
            })
            .catch(() => {
              alert("Make sure WhatsApp installed on your device");
            });
        } else {
          alert("Please insert message to send");
        }
      } 
      else 
      {
        alert("Please insert mobile no");
      }
    }



    function onClickButtonSim(params) {

        sendWhatsApp();

        // Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
        //   console.log(isMobile);

        //   if (supported) {
        //     return Linking.openURL(
        //       "whatsapp://send?phone=5531999999999&text=Oi"
        //     );
        //   } else {
        //     return Linking.openURL(
        //       "https://api.whatsapp.com/send?phone=5531999999999&text=Oi"
        //     );
        //   }
        // })
      // if (!isMobile) 
      // {
      //   var whatsapp = "+5569984324602";
      //   var whatsappURl_android = "whatsapp://send?phone=" +whatsapp +"&text=Oi preto mais lindo e charmoso de Cacoal, é claro que eu aceito. Como eu poderia recusar seu convite ?";
      //   window.open(whatsappURl_android);
      // } 
      // else 
      // {
      //   var url = "web.whatsapp.com/send?phone=";
      //   var num = "+5569984324602";
      //   // var text = "&text=Oi preto mais lindo e charmoso de Cacoal, é claro que eu aceito. Como eu poderia recusar seu convite ?";
      //   var text = "&text=Oi Wyllian";
      //   var whatsappURl = "${url}+${num}+${text}";
      //   window.open(whatsappURl);
      // }
    
    }

    return (
      
      <div className="desktop" style={{ background: "white" }}>
        <div className="nome" id='nome'>
          <label >Gabi ♥</label>
        </div>
        <div className="rectangle" onClick={onClickButtonSim}>
          <div>
            <label >Sim</label>
          </div>
        </div>
        <div id='tipoNao' className="rectangle2" onMouseOver={onClickButton}>
          <div >
            <label>Não</label>
          </div>
        </div>
        
      </div>
    )
  }
}