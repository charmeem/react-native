import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    // const {
    //     title,
    //     rank
    // } = album;

    const {
        thumbnailStyle,
        headerContentStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        imageSectionStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri : thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            {/*<CardSection>*/}
                {/*<View style={headerContentStyle}>*/}
                    {/*<Text style={headerTextStyle}>{title}</Text>*/}
                    {/*<Text>{rank}</Text>*/}
                {/*</View>*/}
            {/*</CardSection>*/}

            <CardSection>
                <Image
                    style={imageSectionStyle}
                    source={{ uri : image}}
                />
            </CardSection>

            <CardSection>
                <Button pressOn={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageSectionStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
