#include <Servo.h>

Servo servo;

int start = 1234;
int good = 1235;
int delim = 999;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9060);
  servo.attach(10);
//  servo.write(180);
}

void loop() {
  // put your main code here, to run repeatedly:

  Serial.println(start);
  delay(3000);

//  if(Serial.available() > 0){
//    int server_shake = Serial.read();
//    Serial.println(server_shake);
//  }

  char message[12];
  int pos = 0;
  while(Serial.available() > 0){
    int receivedByte = Serial.read();

    if(receivedByte == '\n'){
      Serial.println(993);
      message[pos] = '\0';
      Serial.println(message);
    }else{
      Serial.println(992);
      message[pos] = receivedByte;
    }
    pos++;
  }

  Serial.println(1236);

//  while(Serial.available() > 0){
//    int bite = Serial.read();
//    
//    Serial.println();
//  }

//  if(Serial.available() > 0){
//    servo.write(50);
//    delay(1000);
//  
//    int response = Serial.read();
//    if (response == 56){
//      servo.write(90);
//      Serial.println(12345);
//    }else{
//      servo.write(150);
//      Serial.println(response);
//    }
//  }
//  delay(2000);
//  servo.write(180);
//  servo.write(0);
//  delay(5000);
  
//  if(Serial.available() > 0){
//    int receivedByte = Serial.read();
////     char c = (uint8_t) receivedByte;
//    Serial.println(receivedByte);
//
//    if(receivedByte == 177){
//        servo.write(180);
//    }else if (receivedByte == 178){
//      servo.write(150);
//    }
//  
//  }


}
