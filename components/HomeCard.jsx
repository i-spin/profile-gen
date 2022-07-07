import { Card, Grid, Image, Link, Text } from "@geist-ui/core";
import { Twitter } from "@geist-ui/icons";
import styles from "../styles/HomeCard.module.css";
import SocialTag from "./SocialTag";

export default function HomeCard(props) {
  const { profile } = props;

  return (
    <Card style={{ height: profile.image.dimentions.height }}>
      <Grid.Container gap={5} justify="space-between">
        <Grid md={12}>
          <Image
            draggable={false}
            src={profile.image.path}
            alt={`${profile.name}'s profile`}
            width={profile.image.dimentions.width}
            height={profile.image.dimentions.height}
          />
        </Grid>
        <Grid md={12}>
          <div className={styles["profile-details"]}>
            <Text h1>{profile.title}</Text>
            <div className={styles["profile-contacts"]}>
              <Text h3>Contacts:</Text>
              <div className={styles["profile-contacts-links"]}>
                {profile.contacts.map((contact) => (
                  <SocialTag platform={contact.platform} iconSize={20} user={contact.value} />
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid.Container>
    </Card>
  );
}
