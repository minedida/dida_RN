package com.dida.rn;

import android.app.Application;

import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;
import com.bolan9999.SpringScrollViewPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.dida.rn.plugin.update.UpgradePackage;
import com.facebook.react.ReactApplication;
import io.sentry.RNSentryPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.wix.autogrowtextinput.AutoGrowTextInputPackage;
import com.wix.reactnativekeyboardinput.KeyboardInputPackage;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;
import android.webkit.WebView;

import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import me.listenzz.modal.TranslucentModalReactPackage;

//import com.syanpicker.RNSyanImagePickerPackage;
//import com.dida.rn.plugin.theme.ThemePackage;

public class MainApplication extends Application implements ReactApplication, ShareApplication {
    public int theme = R.style.BlueTheme;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new RNSentryPackage(),
            new RNDeviceInfo()
                    , new RNLocalizePackage()
                    , new RNSharePackage()
                    //, new RNSyanImagePickerPackage()
                    , new ReactNativeDialogsPackage()
                    , new SpringScrollViewPackage()
                    , new BlurViewPackage()
                    , new RNGestureHandlerPackage()
                    , new ReanimatedPackage()
                    , new RNCWebViewPackage()
                    , new TranslucentModalReactPackage()
                    , new SplashScreenReactPackage()
                    , new ExtraDimensionsPackage()
                    , new VectorIconsPackage()
                    , new KeyboardInputPackage(MainApplication.this)
                    , new AutoGrowTextInputPackage()
                    //, new ThemePackage()
                    , new UpgradePackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);

        WebView.setWebContentsDebuggingEnabled(true);

    }

    @Override
    public String getFileProviderAuthority() {
        return "com.dida.rn.file.provider";
    }

}
