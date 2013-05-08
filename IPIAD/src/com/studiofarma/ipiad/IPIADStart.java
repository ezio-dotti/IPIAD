package com.studiofarma.ipiad;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.os.StrictMode;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebSettings.RenderPriority;

public class IPIADStart extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_ipiadstart);
        
        this.clearCache();
        this.appView.getSettings().setRenderPriority( RenderPriority.HIGH );
                
        super.loadUrl("file:///android_asset/www/start.html",1000);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.activity_ipiadstart, menu);
        return true;
    }
    
}
