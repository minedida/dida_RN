package com.dida.rn.plugin.theme;

import android.util.Log;

import com.dida.rn.MainApplication;
import com.dida.rn.R;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ThemeModule extends ReactContextBaseJavaModule {
    private static final String TAG = "ThemeModule";
    private ReactApplicationContext reactContext;

    public ThemeModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return "AndroidTheme";
    }

    @ReactMethod
    public void changeTheme(String type) {
        Log.d(TAG, "changeTheme: " + type);
        if (type == null) {
            return;
        }
        if ("blue".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.BlueTheme;
            return;
        }
        if ("black_night".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.BlackNightTheme;
            return;
        }
        if ("black_black".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.BlackBlackTheme;
            return;
        }
        if ("pink".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.PinkTheme;
            return;
        }
        if ("black_gray".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.BlackGrayTheme;
            return;
        }
        if ("green".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.GreenTheme;
            return;
        }
        if ("gray".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.GrayTheme;
            return;
        }
        if ("yellow".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.YellowTheme;
            return;
        }
        if ("white".equals(type)) {
            MainApplication application = (MainApplication) reactContext.getApplicationContext();
            application.theme = R.style.WhiteTheme;
            return;
        }
    }
}
