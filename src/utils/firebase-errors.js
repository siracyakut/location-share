export const getFirebaseError = (errorCode) => {
  switch (errorCode) {
    case "auth/claims-too-large":
      return "Talep yükü, izin verilen maksimum boyutu aşıyor.";
    case "auth/email-already-exists":
      return "Bu e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor.";
    case "auth/id-token-expired":
      return "Firebase Kimliği belirtecinin süresi dolmuş.";
    case "auth/id-token-revoked":
      return "Firebase Kimliği belirteci iptal edildi.";
    case "auth/insufficient-permission":
      return "Bu işlemi gerçekleştirebilmek için yeterli izne sahip değilsiniz.";
    case "auth/internal-error":
      return "Kimlik Doğrulama sunucusu, isteği işlemeye çalışırken beklenmeyen bir hatayla karşılaştı.";
    case "auth/invalid-argument":
      return "Bir Kimlik Doğrulama yöntemine geçersiz bir bağımsız değişken sağlandı.";
    case "auth/invalid-claims":
      return "setCustomUserClaims() işlevine sağlanan özel talep öznitelikleri geçersiz.";
    case "auth/invalid-continue-uri":
      return "Devam URL'si geçerli bir URL dizesi olmalıdır.";
    case "auth/invalid-creation-time":
      return "Oluşturma zamanı, geçerli bir UTC tarih dizisi olmalıdır.";
    case "auth/invalid-credential":
      return "Sistemde bu bilgilere ait bir kullanıcı kaydı bulunamadı.";
    case "auth/invalid-disabled-field":
      return "disabled kullanıcı özelliği için sağlanan değer geçersiz.";
    case "auth/invalid-display-name":
      return "Geçersiz kullanıcı adı girdiniz.";
    case "auth/invalid-dynamic-link-domain":
      return "Sağlanan dinamik bağlantı etki alanı, geçerli proje için yapılandırılmamış veya yetkilendirilmemiş.";
    case "auth/invalid-email":
      return "Sistemde böyle bir e-posta bulunmuyor.";
    case "auth/invalid-email-verified":
      return "E-Posta doğrulaması geçersiz.";
    case "auth/invalid-hash-algorithm":
      return "Hash algoritması, desteklenen algoritmalar listesindeki dizelerden biriyle eşleşmelidir.";
    case "auth/invalid-hash-block-size":
      return "Karma blok boyutu geçerli bir sayı olmalıdır.";
    case "auth/invalid-hash-derived-key-length":
      return "Karma türetilmiş anahtar uzunluğu geçerli bir sayı olmalıdır.";
    case "auth/invalid-hash-key":
      return "Hash anahtarının geçerli bir bayt arabelleği olması gerekir.";
    case "auth/invalid-hash-memory-cost":
      return "Karma bellek maliyeti geçerli bir sayı olmalıdır.";
    case "auth/invalid-hash-parallelization":
      return "Karma paralelleştirme geçerli bir sayı olmalıdır.";
    case "auth/invalid-hash-rounds":
      return "Hash turları geçerli bir sayı olmalıdır.";
    case "auth/invalid-hash-salt-separator":
      return "Karma algoritma tuz ayırıcı alanı, geçerli bir bayt arabelleği olmalıdır.";
    case "auth/invalid-id-token":
      return "Sağlanan kimlik belirteci, geçerli bir Firebase Kimliği belirteci değil.";
    case "auth/invalid-last-sign-in-time":
      return "Son oturum açma zamanı geçerli bir UTC tarih dizisi olmalıdır.";
    case "auth/invalid-page-token":
      return "listUsers() içinde sağlanan sonraki sayfa belirteci geçersiz.";
    case "auth/invalid-password":
      return "Geçersiz şifre girdiniz.";
    case "auth/invalid-password-hash":
      return "Parola hash'i geçersiz.";
    case "auth/invalid-password-salt":
      return "Parola salt'ı geçersiz.";
    case "auth/invalid-phone-number":
      return "Geçersiz telefon numarası.";
    case "auth/invalid-photo-url":
      return "Geçersiz profil resmi adresi.";
    case "auth/invalid-provider-data":
      return "ProviderData geçerli bir UserInfo nesneleri dizisi olmalıdır.";
    case "auth/invalid-provider-id":
      return "ProviderId, desteklenen geçerli bir sağlayıcı tanımlayıcı dizesi olmalıdır.";
    case "auth/invalid-oauth-responsetype":
      return "Yalnızca tam olarak bir OAuth responseType doğru olarak ayarlanmalıdır.";
    case "auth/invalid-session-cookie-duration":
      return "Oturum tanımlama bilgisi süresi, 5 dakika ile 2 hafta arasında milisaniye cinsinden geçerli bir sayı olmalıdır.";
    case "auth/invalid-uid":
      return "Sağlanan uid en fazla 128 karakterden oluşan boş olmayan bir dize olmalıdır.";
    case "auth/invalid-user-import":
      return "İçe aktarılacak kullanıcı kaydı geçersiz.";
    case "auth/maximum-user-count-exceeded":
      return "İzin verilen maksimum kullanıcı sayısı aşıldı.";
    case "auth/missing-android-pkg-name":
      return "Android Uygulamasının yüklenmesi gerekiyorsa, bir Android Paket Adı sağlanmalıdır.";
    case "auth/missing-continue-uri":
      return "İstekte geçerli bir devam URL'si sağlanmalıdır.";
    case "auth/missing-hash-algorithm":
      return "Kullanıcıları parola karmalarıyla içe aktarmak, karma algoritmasının ve parametrelerinin sağlanmasını gerektirir.";
    case "auth/missing-ios-bundle-id":
      return "İstekte bir Paket Kimliği eksik.";
    case "auth/missing-uid":
      return "Geçerli işlem için bir uid tanımlayıcısı gerekiyor.";
    case "auth/missing-oauth-client-secret":
      return "OIDC kod akışını etkinleştirmek için OAuth yapılandırma istemci sırrı gereklidir.";
    case "auth/operation-not-allowed":
      return "Hesabınız kısıtlanmış. Bu işlemi yapmadan önce e-posta adresinizi doğruladığınızdan emin olun.";
    case "auth/phone-number-already-exists":
      return "Bu telefon numarası mevcut bir kullanıcı tarafından zaten kullanılıyor.";
    case "auth/project-not-found":
      return "Yönetici SDK'larını başlatmak için kullanılan kimlik bilgileri için Firebase projesi bulunamadı.";
    case "auth/reserved-claims":
      return "setCustomUserClaims() 'e sağlanan bir veya daha fazla özel kullanıcı talebi saklıdır.";
    case "auth/session-cookie-expired":
      return "Oturum çerezinin süresi doldu.";
    case "auth/session-cookie-revoked":
      return "Oturum çerezi iptal edildi.";
    case "auth/too-many-requests":
      return "İstek sayısı, izin verilen maksimum sayıyı aşıyor.";
    case "auth/uid-already-exists":
      return "Sağlanan uid zaten mevcut bir kullanıcı tarafından kullanılıyor.";
    case "auth/unauthorized-continue-uri":
      return "Devam URL'sinin alanı beyaz listede değil.";
    case "auth/user-not-found":
      return "Belirtilen kullanıcı sistemde bulunamadı.";
    default:
      return "Bilinmeyen hata kodu: " + errorCode;
  }
};
