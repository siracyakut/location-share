import BorderSection from "~/components/border-section";
import ProfilePasswordChange from "~/pages/profile/password-change";
import ProfilePhotoChange from "~/pages/profile/profile-photo";
import ProfileMailChange from "~/pages/profile/mail-change";

export default function Profile() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-14">
      <BorderSection title="E-Posta Güncelleme">
        <ProfileMailChange />
      </BorderSection>
      <BorderSection title="Şifre Güncelleme">
        <ProfilePasswordChange />
      </BorderSection>
      <BorderSection title="Profil Fotoğrafı Güncelleme">
        <ProfilePhotoChange />
      </BorderSection>
    </div>
  );
}
