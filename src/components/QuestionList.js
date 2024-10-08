import { Text, View, StyleSheet } from "react-native";

const QuestionListItem = ({ question }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.stats}>{question.score} votes · {question.answer_count} answers · {question.view_count} views</Text>
            <Text style={styles.title}>{question.title}</Text>
            <Text numberOfLines={2} style={styles.body}>{question.body_markdown}</Text>
            <View style={styles.tags}>
          {question.tags.map((tag) => (
            <Text style={styles.tag} key={tag}>
              {tag}
            </Text>
          ))}
                 <Text style= {styles.time}>
                asked {new Date(question.creation_date*1000).toDateString()}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderBottomWidth: 0.5,
      borderColor: 'lightgray',
    },
    stats: {
      fontSize: 12,
    },
    title: {
      color: '#0063bf',
      marginVertical: 5,
    },
    body: {
      fontSize: 11,
      color: 'dimgray',
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    tag: {
      backgroundColor: '#e1ecf4',
      color: '#39739d',
      padding: 5,
      borderRadius: 3,
      overflow: 'hidden',
      fontSize: 12,
    },
    time: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'dimgray',
    },
  });

export default QuestionListItem;
