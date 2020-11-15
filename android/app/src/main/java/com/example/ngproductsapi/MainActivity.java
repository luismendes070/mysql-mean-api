package com.example.ngproductsapi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
	
	Button crashButton = new Button(this);
crashButton.setText("Crash!");
crashButton.setOnClickListener(new View.OnClickListener() {
   public void onClick(View view) {
       throw new RuntimeException("Test Crash"); // Force a crash
   }
});

addContentView(crashButton, new ViewGroup.LayoutParams(
       ViewGroup.LayoutParams.MATCH_PARENT,
       ViewGroup.LayoutParams.WRAP_CONTENT));

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}