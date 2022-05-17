import { useMutation, useQuery } from "@apollo/client";
import {
  message,
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  TimePicker,
} from "antd";
import {
  NEW_EVENT_MUTATION,
  GET_ALL_LOCATIONS,
  GET_ALL_USERS,
} from "./queries";
import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";
import moment from "moment-timezone";

const { Option } = Select;

function NewEventForm() {
  const navigate = useNavigate();

  const [saveEvent, { loading: event_loding }] =
    useMutation(NEW_EVENT_MUTATION);
  const { loading: users_loding, data: users_data } = useQuery(GET_ALL_USERS);
  const { loading: locations_loding, data: locations_data } =
    useQuery(GET_ALL_LOCATIONS);

  const handleSubmit = (values) => {
    try {
      saveEvent({
        variables: { data: values },
      });
      success();
    } catch (error) {
      error_ant();
    }
  };

  const success = () => {
    message.success("Data Saved", 6);
    navigate("/");
  };

  const error_ant = () => {
    message.error("Something Wrong", 10);
  };


  moment.tz.setDefault("Atlantic/Azores");

  return (
    <div className={Styles.content}>
      <Form name="basic" onFinish={handleSubmit} autoComplete="of">
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input disabled={event_loding} size="medium" placeholder="Title" />
        </Form.Item>

        <Form.Item
          name="desc"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea
            disabled={event_loding}
            size="medium"
            placeholder="Description"
          />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[{ required: true, message: "Please select date !" }]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            disabled={event_loding}
            placeholder="Date of event"
          />
        </Form.Item>

        <Form.Item
          name="from"
          rules={[
            { required: true, message: "Please select event start time" },
          ]}
        >
          <TimePicker
            format="HH:mm"
            showNow={false}
            disabled={event_loding}
            placeholder="Start time"
          />
        </Form.Item>

        <Form.Item
          name="to"
          rules={[
            { required: true, message: "Please select event finish time!" },
          ]}
        >
          <TimePicker
            format="HH:mm"
            showNow={false}
            disabled={event_loding}
            placeholder="End time"
          />
        </Form.Item>

        <Form.Item
          name="location_id"
          rules={[{ required: true, message: "Please select location!" }]}
        >
          <Select
            disabled={locations_loding || event_loding}
            loading={locations_loding}
            placeholder="Select location"
          >
            {locations_data &&
              locations_data.locations.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="user_id"
          rules={[
            { required: true, message: "Please select owner of the event!" },
          ]}
        >
          <Select
            disabled={users_loding || event_loding}
            loading={users_loding}
            placeholder="Select user"
          >
            {users_data &&
              users_data.users.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.username}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item className={Styles.button}>
          <Button loading={event_loding} type="primary" htmlType="submit">
            Add Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewEventForm;
